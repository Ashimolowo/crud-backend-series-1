const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/production.model.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Root route
app.get('/', (req, res) => {
    res.send("Hello Shaybah💦 API xup hahaha welcome on board");
});

// GET route for fetching all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// GET route for fetching products by id
app.get('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});
//UPDATE data
app.put('/api/product/:id', async(req,res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: "Product not found"})
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}); 
///DELETE A Product
app.delete('/api/product/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: "Product not found"})
        }
        res.status(200).json({ message: "Product delete successfully"})
    } catch (error) {
        
    }
})
// POST route for creating a new product(single product)
app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product); // 201 Created
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Connect to MongoDB and start server
mongoose.connect("mongodb+srv://royins64:urplYUaiyqZhlBJa@backendj.p45an.mongodb.net/?retryWrites=true&w=majority&appName=Backendj")
    .then(() => {
        console.log("Connected successfully");
        app.listen(3000, () => {
            console.log("Server is running on port 3001");
        });
    })
    .catch((error) => {
        console.log("Connection failed!", error);
    });


//step 3, 4 runing /posing single data
// const express = require('express');
// const mongoose = require('mongoose');
// const Product = require('./models/production.model.js');

// const app = express();
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send("Hello Shaybah💦 API xup hahaha welcome on board");
// });

// app.post('/api/products', async (req, res) => {
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     } catch (error) {
      
//       // res.status(500).send(error)
//       res.status(500).json({message: error.message})
      
//     }
// });

// mongoose.connect("mongodb+srv://royins64:urplYUaiyqZhlBJa@backendj.p45an.mongodb.net/?retryWrites=true&w=majority&appName=Backendj")
// .then(() => {
//     console.log("connected successfully");
//     app.listen(3000, () => {
//         console.log("serving is running Shaybah💦 hi won");
//     });
// }).catch((error) => {
//     console.log("Connection failed!", error);
// });


//step 1, 2, 3
// const express = require('express');
// const mongoose = require('mongoose');
// const Product = require('./models/production.model.js');

// const app = express();
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send("Hello Shaybah💦 API xup hahaha welcome on board");
// });

// app.post('/api/products', (req, res) => {
//     console.log(req.body);
//     res.send(req.body);
// });

// mongoose.connect("mongodb+srv://royins64:urplYUaiyqZhlBJa@backendj.p45an.mongodb.net/?retryWrites=true&w=majority&appName=Backendj")
// .then(() => {
//     console.log("connected successfully");
//     app.listen(3000, () => {
//         console.log("serving is running Shaybah💦 hi won");
//     });
// }).catch((error) => {
//     console.log("Connection failed!", error);
// });
