const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find({ userId: req.userId }).sort({ createdAt: -1 });
        
        const formattedTodos = todos.map(todo => ({
            id: todo._id,
            title: todo.title,
            completed: todo.completed,
            status: todo.status,
            createdAt: todo.createdAt
        }));
        
        res.json(formattedTodos);
    } catch (error) {
        res.status(500).json({ message: 'خطا در دریافت لیست تسک‌ها', error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const { title, status = 'Medium' } = req.body;

        if (!title || title.trim() === '') {
            return res.status(400).json({ message: 'عنوان تسک الزامی است' });
        }

        if (status && !['Low', 'Medium', 'High'].includes(status)) {
            return res.status(400).json({ message: 'مقدار status باید Low، Medium یا High باشد' });
        }

        const newTodo = new Todo({
            userId: req.userId,
            title: title.trim(),
            status
        });

        await newTodo.save();

        res.status(201).json({
            id: newTodo._id,
            title: newTodo.title,
            completed: newTodo.completed,
            status: newTodo.status,
            createdAt: newTodo.createdAt
        });
    } catch (error) {
        res.status(500).json({ message: 'خطا در ایجاد تسک', error: error.message });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, completed, status } = req.body;

        const todo = await Todo.findOne({ _id: id, userId: req.userId });

        if (!todo) {
            return res.status(404).json({ message: 'تسک یافت نشد' });
        }

      
        if (status && !['Low', 'Medium', 'High'].includes(status)) {
            return res.status(400).json({ message: 'مقدار status باید Low، Medium یا High باشد' });
        }

        if (title !== undefined) todo.title = title.trim();
        if (completed !== undefined) todo.completed = completed;
        if (status !== undefined) todo.status = status;

        await todo.save();

        res.json({
            id: todo._id,
            title: todo.title,
            completed: todo.completed,
            status: todo.status,
            createdAt: todo.createdAt
        });
    } catch (error) {
        res.status(500).json({ message: 'خطا در به‌روزرسانی تسک', error: error.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const todo = await Todo.findOneAndDelete({ _id: id, userId: req.userId });

        if (!todo) {
            return res.status(404).json({ message: 'تسک یافت نشد' });
        }

        res.json({ message: 'تسک با موفقیت حذف شد', id: todo._id });
    } catch (error) {
        res.status(500).json({ message: 'خطا در حذف تسک', error: error.message });
    }
});

module.exports = router;
