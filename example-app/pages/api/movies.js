import connectToDatabase from "../../lib/mongodb";

export default async function (req, res) {
    const db = await connectToDatabase();

    // GET
    if (req.method == "GET") {
        const movies = await db.collection("movies")
            .find({ year: 2010 })
            .sort({ title: 1 })
            .limit(15)
            .toArray();
        
        res.json(movies);
    }

    // POST

    // PUT

    // DELETE
}