# class
class Employee():
    name = "Joko"

    def get_name(self):
        return self.name

#instantiate class
employee = Employee()
employee.name = "Luna"
print(employee.get_name())