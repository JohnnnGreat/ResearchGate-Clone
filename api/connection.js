import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    // Connect to mongoose database
    await mongoose.connect(
      "mongodb+srv://johnossai20:JohnO@mycluster.tyr5c0g.mongodb.net/?retryWrites=true&w=majority"
      //   {
      //     useNewUrlParser: true,
      //     //   useFindAndModify: false,
      //     useUnifiedTopology: true,
      //   }
    );
    console.log("Database connected Successfully");
  } catch (err) {
    //If there is an error
    if (err) {
      console.log("Error connecting to Database", err.message);
    }
  }
};



