using Microsoft.AspNetCore.Mvc;

namespace TemperatureApi.Controllers;

[ApiController]
[Route("api/[controller]")] // This makes the URL: api/temperature
public class TemperatureController : ControllerBase
{
    // 1. Celsius to Fahrenheit
    [HttpGet("c-to-f")]
    public IActionResult CelsiusToFahrenheit(double celsius)
    {
        double fahrenheit = (celsius * 9.0 / 5.0) + 32;
        return Ok(new { celsius, fahrenheit });
    }

    // 2. Celsius to Kelvin
    [HttpGet("c-to-k")]
    public IActionResult CelsiusToKelvin(double celsius)
    {
        double kelvin = celsius + 273.15;
        return Ok(new { celsius, kelvin });
    }

    // 3. Fahrenheit to Celsius
    [HttpGet("f-to-c")]
    public IActionResult FahrenheitToCelsius(double fahrenheit)
    {
        double celsius = (fahrenheit - 32) * 5.0 / 9.0;
        return Ok(new { fahrenheit, celsius });
    }

    // 4. Kelvin to Celsius
    [HttpGet("k-to-c")]
    public IActionResult KelvinToCelsius(double kelvin)
    {
        double celsius = kelvin - 273.15;
        return Ok(new { kelvin, celsius });
    }
}