const { Model } = require('sequelize/dist')
const {sequelize} = require('./db')
const {Menu} = require('./Menu')
const {Customer} = require('./Customer')
const{Dish} = require('./Dish')
describe('Customer Database', () => {
    beforeAll(async() => {
        await sequelize.sync({force:true})
        const arrayOfDish=[
            {Order_id: 1001, Quantity: 2,Order_date : '2021-12-01',Cus_id:101},
            {Order_id:  1002,Quantity: 1,Order_date:'2021-12-01',Cus_id:111},
            {Order_id: 1003, Quantity: 1,Order_date: '2021-12-01',Cus_id:125}
        ]
        await Dish.bulkCreate(arrayOfDish)
    const arrayOfMenulist=[
        {entree_id: 20, entree_name: 'Steak',price : 19.99},
        {entree_id:  25,entree_name: 'Chicken',price: 12.99},
        {entree_id: 11, entree_name: 'Salad',price: 9.99}
    ]
    await Menu.bulkCreate(arrayOfMenulist)
    const arrayOfCustomer=[
        {Cus_id: 101, Payment_id: 4545, Food_id:98},
        {Cus_id: 125,Payment_id: 7654,Food_id: 78},
        {Cus_id: 111, Payment_id: 6543,Food_id: 99}
    ]
    await Customer.bulkCreate(arrayOfCustomer)
})
    test('Menu has items', async() => {
        
           const testMenu = await Menu.findOne({
            where: {
              entree_name: 'Steak'
            }
          });
          test('Dish has Items', async() => {
            
               const testDish = await Dish.findOne({
                where: {
                  Order_id: 1001
                }
              });
            expect(testDish.Order_id).toBe(1001)
        })
        expect(testMenu.entree_name).toBe('Steak')
    })
    test('Customer tabel', async() => {
        
           const testCustomer = await Customer.findOne({
            where: {
              Cus_id: 101
            }
          });
        expect(testCustomer.Cus_id).toBe(101)
    })
})
