const api_weather = city => {
    const key = 'd62a6266a5d01c1f7203a2e6767ce087';
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
};


export default api_weather;