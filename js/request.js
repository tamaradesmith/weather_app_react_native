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
      return error.message
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
      return error.message
    }
  },
  async getHighLowReadings(id) {
    try {
      const res = await fetch(`${BASE_URL}/sensors/${id}/highslows`, {
        credentials: 'include',
      });
      return res.json();
    } catch (error) {
      console.log("error message: ", error.message);
      return error.message
    };
  },
  async getDayReadings(sensorId) {
    try {
      const res = await fetch(`${BASE_URL}/sensors/${sensorId}/day`, {
        credentials: 'include',
      })
      return res.json();
    } catch (error) {
      console.log(error.message);
      return error.message
    };
  },
}

const Display = {
  async getDisplaySensors(display) {
    try {
      const res = await fetch(`${BASE_URL}/display/${display}`, {
        credentials: 'include',
      });
      return res.json()
    } catch (error) {
      console.log(error.message)
      return error.message;
    }
  }
};

export { Sensor, Display }