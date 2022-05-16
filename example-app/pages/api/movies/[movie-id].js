import connectToDatabase from "../../../lib/mongodb";

export default async function handler(req, res) {
    const db = await connectToDatabase();
  const { method } = req;
  const { moviesID } = req.query;
  switch (method) {
    case "PUT":
      try {
        const movies = await db.collection("movies")
        res.json(movies);
        const { title, year } = req.body;
        if (!title && !year) return "inavalid data";
        await movies.updateOne({ _id: moviesID }, { title, year });
        res.status(200).json({ success: true });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;

    case "DELETE":
      try {
        await movies.deleteOne({ _id: moviesID });
        res.status(200).json({ success: true });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;
  }
}