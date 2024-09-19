fetch("/screens/employees/card.html").then((res) => {
  res.text().then((data) => {
    const arrOfEmployees = Array(6).fill("");
    const employeesContent = document.getElementById("employees");

    arrOfEmployees.forEach(() => {
      employeesContent.innerHTML += data;
    });
  });
});

changePageName("Funcionários");
