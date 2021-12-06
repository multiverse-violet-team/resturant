const { Model } = require('sequelize/dist')
const {sequelize} = require('./db')
const {Menu} = require('./Menu')
const {Customer} = require('./Customer')
const {Dish} = require('./Dish')
const {Chef} = require('./Chef')
const {Payment} = require('./Payment')
describe('Customer Database', () => {
    beforeAll(async() => {
        await sequelize.sync({force:true})
    })
    const arrayOfPayment=[
        {Pay_id: 4545, Cus_id: 101,Order_id : 1001,Pay_type:'VISA'},
        {Pay_id:  7654,Cus_id: 111,Order_id:1002,Pay_type:'MASTERCARD'},
        {Pay_id: 6543, Cus_id: 1003, Order_id:1003,Pay_type:'CASH'}
    ]
    const arrayOfCustomer=[
        {Cus_id: 101, Pay_id: 4545, Food_id:98},
        {Cus_id: 125,Pay_id: 7654,Food_id: 78},
        {Cus_id: 111, Pay_id: 6543,Food_id: 99}
    ]
    const arrayOfDish=[
        {Order_id: 1001, Quantity: 2,Order_date : '2021-12-01',Cus_id:101},
        {Order_id:  1002,Quantity: 1,Order_date:'2021-12-01',Cus_id:111},
        {Order_id: 1003, Quantity: 1,Order_date: '2021-12-01',Cus_id:125}
    ]
    const arrayOfChef=[
        {Chef_id: 11001, Chef_name: 'Kasem',Salary : 65000.00,Order_id:1001},
        {Chef_id:  11002,Chef_name: 'Saeed',Salary:64500.00,Order_id:1002},
        {Chef_id: 11003, Chef_name: 'Tom', Salary:62000.00,Order_id:1003}
    ]
    const arrayOfMenulist=[
        {entree_id: 20, entree_name: 'Steak',price : 19.99},
        {entree_id:  25,entree_name: 'Chicken',price: 12.99},
        {entree_id: 11, entree_name: 'Salad',price: 9.99}
    ]
    test('Payment has Items', async() => {
        await Payment.bulkCreate(arrayOfPayment)
           const testPayment = await Payment.findOne({
            where: {
                Pay_id: 4545
            }
          });
          expect(testPayment.Pay_id).toBe(4545)
        })
    test('Chef has Items', async() => {
        await Chef.bulkCreate(arrayOfChef)
           const testChef = await Chef.findOne({
            where: {
                Chef_id: 11001
            }
          });
          expect(testChef.Chef_id).toBe(11001)
        })
    test('Dish has Items', async() => {
        await Dish.bulkCreate(arrayOfDish)
           const testDish = await Dish.findOne({
            where: {
              Order_id: 1001
            }
          });
        expect(testDish.Order_id).toBe(1001)
    })
    test('Menu has items', async() => {
        await Menu.bulkCreate(arrayOfMenulist)
           const testMenu = await Menu.findOne({
            where: {
              entree_name: 'Steak'
            }
          });
        expect(testMenu.entree_name).toBe('Steak')
    })
    test('Customer tabel', async() => {
        await Customer.bulkCreate(arrayOfCustomer)
           const testCustomer = await Customer.findOne({
            where: {
              Cus_id: 101
            }
          });
        expect(testCustomer.Cus_id).toBe(101)
    })
})