#parent class
class Person:

    name = "joko"

    def walk(self):
        return "walking"

    def drink(self):
        return "drinking"

    #child class
    class Employee(Person):

        def get_name(self):
            return self.name

        def walk_and_drink(self):
            drink = self.drink()
            return "employee is walking" + drink

employee = Employee()
employee.name = "Cintya"
print(employee.get_name())
print(employee.walk_and_drink())