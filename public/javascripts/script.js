

function addToCart(proId){
    $.ajax({
        url:'/add-to-cart/'+proId,
        method:'get',
        success:(Response) => {
            if (Response.status) {
                // Increment the cart count displayed in the badge
                let countElement = $('#cart-count');
                let currentCount = parseInt(countElement.text());
                countElement.text(currentCount + 1);
                
            
            } else {
                // Show an error message if needed
                alert("Failed to add product to cart.");
            }
        },
        error: (error) => {
            // Handle AJAX error if needed
            console.error("AJAX error:", error);
            alert("An error occurred while adding the product to the cart.");
        }
    });
}



//new
// Function to add a product to the cart
// function addToCart(proId) {
//     $.ajax({
//         url: '/add-to-cart/' + proId,
//         method: 'get',
//         success: (Response) => {
//             if (Response.status) {
//                 // Increment the cart count displayed in the badge
//                 let countElement = $('#cart-count');
//                 let currentCount = parseInt(countElement.text());
//                 countElement.text(currentCount + 1);
//             } else {
//                 // Show an error message if needed
//                 alert("Failed to add product to cart.");
//             }
//         },
//         error: (error) => {
//             // Handle AJAX error if needed
//             console.error("AJAX error:", error);
//             alert("An error occurred while adding the product to the cart.");
//         }
//     });
// }

// // Function to change the quantity of a product in the cart
// function changeQuantity(cartId, proId, count) {
//     $.ajax({
//         url: '/change-product-quantity',
//         method: 'POST',
//         data: {
//             cart: cartId,
//             product: proId,
//             count: count
//         },
//         success: function (response) {
//             // Update the UI to reflect the new quantity
//             // You can update the quantity value in the table cell here
//             // Example:
//             // $('#quantity-' + cartId).text(response.newQuantity);
//             alert('Quantity changed successfully');
//         },
//         error: function (error) {
//             alert('Error changing quantity');
//             console.error(error);
//         }
//     });
// }

// // Function to remove a product from the cart
// function removeProduct(cartId, proId) {
//     $.ajax({
//         url: '/remove-product',
//         method: 'POST',
//         data: {
//             cart: cartId,
//             product: proId
//         },
//         success: function (response) {
//             // Update the UI to remove the product from the cart
//             // You can remove the corresponding table row here
//             // Example:
//             // $('#row-' + proId).remove();
//             alert('Product removed successfully');
//         },
//         error: function (error) {
//             alert('Error removing product');
//             console.error(error);
//         }
//     });
// }

// $(document).ready(function () {
//     // Add event listeners to plus and minus buttons
//     $('.cart-item-count').on('click', function () {
//         const cartId = $(this).data('cart-id');
//         const productId = $(this).data('product-id');
//         const countChange = parseInt($(this).data('count'));

//         // Call the function to change item quantity
//         changeQuantity(cartId, productId, countChange);
//     });

//     // Add event listeners to remove buttons
//     $('.btn-remove').on('click', function () {
//         const cartId = $(this).data('cart-id');
//         const productId = $(this).data('product-id');

//         // Call the function to remove the product
//         removeProduct(cartId, productId);
//     });
// });

