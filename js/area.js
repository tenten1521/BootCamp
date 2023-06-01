function runActivity(){
    let choice = Number(prompt("What shape do you want to calculate the area for? Enter 1: Triangle, 2: Circle, or 3:Rectangle"));

    if (choice === 1) {
      let base = Number(prompt("Enter the base of the triangle:"));
      let height = Number(prompt("Enter the height of the triangle:"));
      let area = 0.5 * base * height;
      console.log("The area of the triangle is: " + area);
    } else if (choice === 2) {
      let radius = Number(prompt("Enter the radius of the circle:"));
      let area = 3.1416 * radius ** 2;
      console.log("The area of the circle is: " + area);
    } else if (choice === 3) {
      let length = Number(prompt("Enter the length of the rectangle:"));
      let width = Number(prompt("Enter the width of the rectangle:"));
      let area = length * width;
      console.log("The area of the rectangle is: " + area);
    } else {
      alert("Invalid input. Please enter a number from 1 to 3.")
      console.log("Invalid input. Please enter a number from 1 to 3.");
      
    }
}
