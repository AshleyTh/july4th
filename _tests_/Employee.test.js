const Employee = require("../Lib/Employee")

test("First Test", () => {
    const employee = new Employee("Ash", 123, "mail@gmail.com")
    expect(employee.name).toBe("Ash")

    expect(employee.id).toBe(123)

    expect(employee.email).toBe("mail@gmail.com")
})

