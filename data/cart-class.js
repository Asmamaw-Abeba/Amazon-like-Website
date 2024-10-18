class Cart {
  cartItems; // public property
  #localStorageKey; // private property only access inside a class
  // add constructor to put setup code
  constructor(localStorageKey) {
    this.#localStorageKey = localStorageKey;
    this.#loadFromStorage();
  }
  // make private method to make safer
  #loadFromStorage() {
    // 'this' will give the outer object, that is 'cart'
    // used to it dosn't matter when the outer object(variable) name is.
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
    if (!this.cartItems) {
      this.cartItems = [{
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 2,
          deliveryOptionId: '1'
      }, {
          productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
          quantity: 1,
          deliveryOptionId: '2'
      }];
    }
  }

  saveToStorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
  }

  addToCart(productId) {
    let matchingItem;
  
    this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
    });
  
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      this.cartItems.push({
          productId: productId,
          quantity: 1
      });
    }
    this.saveToStorage();
  }

  removeFromCart(productId) {
    const newCart = [];
  
    this.cartItems.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });
    this.cartItems = newCart;
  
    this.saveToStorage(); 
  }

  updateDeliveryOption ( productId, deliveryOptionId) {
    let matchingItem;
  
    this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
    });
  
    matchingItem.deliveryOptionId = deliveryOptionId;
    this.saveToStorage();
  }
  

}

// the below  objects are called instance of the class
const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');

console.log(cart);
console.log(businessCart);
