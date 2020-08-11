const BASE_URL = 'http://localhost:4000';

const Sensor = {
  async getSensor(id) {
    try {
      const res = await fetch(`${BASE_URL}/sensors/${id}`, {
        credentials: 'include',
      });
      return res.json();
    } catch (error) {
      console.log(error.message);
    };
  },
  async getReading(id) {
    try {
      const res = await fetch(`${BASE_URL}/sensors/${id}/reading`, {
        credentials: 'include',
      })
      return res.json();
    } catch (error) {
      console.log(error.message)
    }
  }
};

export { Sensor }