let data = [
    {
      name: 'Alex',
      age: '24'
    },
    {
      name: 'Jaecob',
      age: '24'
    },
    {
      name: 'German',
      age: '24'
    },
    {
      name: 'Myles',
      age: '22'
    },
    {
      name: 'Gio',
      age: '27'
    },
    {
      name: 'Gina',
      age: '23'
    }
  ];
  
  const info = document.querySelector('#info');
  
  let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
  });
  
  info.innerHTML = details.join('\n');