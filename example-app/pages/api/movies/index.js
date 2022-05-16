import connectToDatabase from "../../../lib/mongodb";

export default async function handler(req, res) {
    const db = await connectToDatabase();
    const { method } = req;
    switch (method) {
      case "GET":
        try {
            const movies = await db.collection("movies")
            .find({ year: 2010 })
            .sort({ title: 1 })
            .limit(20)
            .toArray();
            res.json(movies);
            res.status(200).json({success: true, data:clients });
        } catch (error) {
          console.log(error);
          res.status(500).json({ success: false, error });
        }
        break;
  
      case "POST":
        try {
          const { title, year } = req.body;
          if (!title && !year) throw "invalid data";
          const movies = await movies.create({ title, year });
          res.status(201).json({success:true, data:movies});
        } catch (error) {
          console.log(error);
          res.status(500).json({ success:false, error });
        }
        break;
    }
  }