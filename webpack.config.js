// // module.exports = {
// //     // ... other Webpack configuration options
// //     resolve: {
// //       fallback: {
// //         "path": require.resolve("path-browserify")
// //       }
// //     }
// //   };
//   const path = require('path');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   resolve: {
//     fallback: {
//       "path": require.resolve("path-browserify"),
//       "os": require.resolve("os-browserify/browser"),
//       "crypto": require.resolve("crypto-browserify")
//     }
//   },
//   module: {
//     rules: [
//       // Your other Webpack rules go here
//     ]
//   },
//   plugins: [
//     // Your Webpack plugins go here
//   ]
// };

// module.exports = {
//     // ... other Webpack configuration options
//     resolve: {
//       fallback: {
//         "path": false,
//         "os": false,
//         "crypto": false
//       }
//     }
//   };


// module.exports = {
//     // ... other Webpack configuration options
//     node: {
//       path: true
//     }
//   }

// require('dotenv').config();

// module.exports = {
//     plugins: [
//         new webpack.DefinePlugin({
//             'process.env.REACT_APP_API_KEY': JSON.stringify(process.env.REACT_APP_API_KEY)
//         })
//     ]
// }