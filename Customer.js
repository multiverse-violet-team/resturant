const {sequelize, DataTypes, Model} = require('./db')
class Customer extends Model {
}
Customer.init({
    Cus_id: DataTypes.INTEGER,
    Payment_id: DataTypes.INTEGER,
    Food_id: DataTypes.INTEGER
}, {
    sequelize,
    timestamps: false
})
module.exports = {Customer}