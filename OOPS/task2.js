// create a class for Car with minimum 5 attributes, create 3
// defferent objects with meaning ful name, and set and get all
// information.




class CAR{
    
   name;
   color;
   company;
   type;
   price;

display(name,color,company,type,price){
   this.name = name;
   this.color = color;
   this.company = company;
   this.type = type;
   this.price = price;
}
}

const kia = new CAR()
      kia.display("kia seltos", "Black","Kia", "petrol","15lakh")
      console.log(kia)


const thar = new CAR()
      thar.display("thar", "Black","Mahindra", "Dieseal","18lakh")
      console.log(thar)


const swift = new CAR()
      swift.display("Swift", "Red","Suzuki", "petrol","9lakh")
      console.log(swift)

