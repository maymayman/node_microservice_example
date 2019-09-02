const schedule = require('node-schedule');
const timeDeliveredOrder = process.env.TIME_DELIVERED_ORDER || 10000;

module.exports = {
  deliveredOrder: async (order) => {
    const updatedAt = new Date(order.updatedAt).getTime();
    const date = new Date(updatedAt + timeDeliveredOrder);
 
    schedule.scheduleJob(date, async function(){
      try {
        order.set({
          status: 'delivered'
        });

        await order.save();
      } catch (e) {
        console.error(e);
        throw e;
      }
    });
  }
};
