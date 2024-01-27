<?php

// Function to make API call
function getWeatherData($latitude, $longitude) {
    $apiKey = 'f9976d2ad3f54e52912152914242701';
    $apiUrl = "https://api.weatherapi.com/v1/current.json?key=$apiKey&q=$latitude,$longitude&aqi=no";

    // Initialize cURL session
    $ch = curl_init();

    // Set cURL options
    curl_setopt($ch, CURLOPT_URL, $apiUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Execute cURL session and get the response
    $response = curl_exec($ch);

    // Close cURL session
    curl_close($ch);

    return $response;
}


if (isset($_SERVER['HTTP_ORIGIN'])) {
  // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one you want to allow, and if so:
  header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
  header('Access-Control-Allow-Credentials: true');
  header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
      header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
      header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

  exit(0);
}

// Set latitude and longitude coordinates (replace these with your actual values)
$latitude = '42.28';
$longitude = '-83.09';

// Make the API call
$weatherData = getWeatherData($latitude, $longitude);

// Pass the response back to the JavaScript application
header('Content-Type: application/json');
echo $weatherData;
