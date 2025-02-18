/* Global Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: white
    color: blue;
    padding: 20px; /* Menambahkan padding agar tidak mepet pinggir */
}

/* Header */
header {
    background-color: #4a90e2;
    color: white;
    text-align: center;
    padding: 20px;
    margin-bottom: 20px;
}

header .header-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px; /* Menambahkan padding di dalam header */
}

/* Navigation */
nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
}

nav ul li {
    display: inline-block;
    margin: 0 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
}

nav ul li a i {
    margin-right: 8px;
}

/* Main Content */
main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

section {
    margin-bottom: 20px;
    padding: 0 20px; /* Menambahkan padding di dalam section */
}

.features {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
}

.feature-card {
    background-color: #4a90e2;
    color: white;
    padding: 20px;
    width: 23%;
    border-radius: 10px;
    text-align: center;
    box-sizing: border-box;
}

.feature-card i {
    font-size: 40px;
    margin-bottom: 10px;
}

.feature-card h3 {
    margin-top: 10px;
    font-size: 18px;
}

/* Footer */
footer {
    text-align: center;
    background-color: #333;
    color: white;
    padding: 10px;
    margin-top: 20px;
}

footer .social-links a {
    color: white;
    margin: 0 10px;
    font-size: 20px;
    text-decoration: none;
}

footer .social-links a:hover {
    color: #4a90e2;
}
