const topDeserts = [
    {
        id: "1",
        title: "Chola Poori",
        cal: "5000",
        description: "Poori that is very big in size",
        image: "https://picsum.photos/200/300?random",
        price: "10.00"
    },
    {
        id: "2",
        title: "Bhel Poori",
        cal: "1500",
        description: "Pori with some vegetables",
        image: "https://picsum.photos/200/300?random",
        price: "50.00"
    },
    {
        id: "3",
        title: "Dahi Poori",
        cal: "2000",
        description: "Poori with curd and masala",
        image: "https://picsum.photos/200/300?random",
        price: "13.00"
    },
]

const desserts = [
    {
      name: "Chocolate Cake",
      calories: 400,
      createdAt: "2022-09-01",
    },
    {
      name: "Ice Cream",
      calories: 200,
      createdAt: "2022-01-02",
    },
    {
      name: "Tiramisu",
      calories: 300,
      createdAt: "2021-10-03",
    },
    {
      name: "Cheesecake",
      calories: 600,
      createdAt: "2022-01-04",
    },
  ];
  

const Map = () =>
{
    const listItems = topDeserts.map( (e) => 
    {
       return (
            <li key={e.id}>{e.title} - {e.price}</li>
        )
    });

    const itemList = desserts.filter((e) => e.calories < 500).sort( (a,b)=> a.calories - b.calories).map((e) => {
        return <p>{e.name} - {e.calories}</p>
      })

    return <>
        {listItems}
        {itemList}
    </>
}

export { Map }