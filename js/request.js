const BASE_URL = 'http://localhost:4000';

const Sensor = {
  async getSensor(id) {
    if (id === undefined) {
      return null;
    }
    try {
      const res = await fetch(`${BASE_URL}/sensors/${id}`, {
        credentials: 'include',
      });
      return res.json();
    } catch (error) {
      console.error("get Sensor ", error.message);
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
      console.error("get Single reading  ", error.message)
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
      console.error("error message: high low readings", error.message);
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
      console.error("day reading ", error.message);
      return error.message
    };
  },
  async getReadings(sensorId, period) {
    try {
      const res = await fetch(`${BASE_URL}/sensors/${sensorId}/${period}`, {
        credentials: 'include',
      });
      return res.json();
    } catch (error) {
      console.error("get readings ", error.message);
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
      console.error('display sensors error ', error.message)
      return error.message;
    }
  },
  async getUserDisplays() {
    try {
      const res = await fetch(`${BASE_URL}/display/user/index`, {
        credentials: 'include',
      })
      return res.json();
    } catch (error) {
      console.error("user Display errror ", error.message);
    }
  },
};

const User = {
  async login(user) {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    }).catch(err => {
      console.error("Log in", err.message);
    });
    return res.json()
  },
  async getUser() {
    const res = await fetch(`${BASE_URL}/auth/`, {
      credentials: 'include',
    });
    return res.json();
  },
};


export { Sensor, Display, User };
