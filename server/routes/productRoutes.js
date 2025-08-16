import express from "express";

const router = express.Router();

router.get("/", (req, res) =>
{
    res.json(
        [
            {
                id: 1,
                name: "Men's T-Shirt",
                price: 25
            },

            {
                id: 1,
                name: "Men's T-Shirt",
                price: 25
            }
        ]
    )
})


export default router;