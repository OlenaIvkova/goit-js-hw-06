const customer = {
    username: "Mango",
    balance: 24000,
    discount: 0.1,
    orders: ["Burger", "Pizza", "Salad"],
    // Change code below this line
    // getBalance() {
    //     return balance;
    // },
    getBalance() {
        return this.balance;
    },
    // getDiscount() {
    //     return discount;
    // },
    getDiscount() {
        return this.discount;
    },
    // setDiscount(value) {
    //     discount = value;
    // },
    setDiscount(value) {
        this.discount = value;
    },
    // getOrders() {
    //     return orders;
    // },
    getOrders() {
        return this.orders;
    },
    addOrder(cost, order) {
        this.balance -= cost - cost * this.discount;
        this.orders.push(order);
    },
    // addOrder(cost, order) {
    //     balance -= cost - cost * discount;
    //     orders.push(order);
    // },
    // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
