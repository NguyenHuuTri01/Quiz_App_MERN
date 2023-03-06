import { Router } from "express";
const router = Router();

// questions routes api
router.get('/questions', (req, res) => {
    res.json("question api get request")
})

export default router;
