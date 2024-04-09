export type NavigationLinks = Navigate[]
type Navigate ={
  title:string
  path:string
}

export const navigationLinks:NavigationLinks = [
	{ title: 'Главная', path: '/reactvitemyprogect' },
	{ title: 'О Нас', path: '/reactvitemyprogect/about' },
	{ title: 'Каталог продукции!!!', path: '/reactvitemyprogect/catalog' },
  {title:'Контакты',path:'/reactvitemyprogect/contacts'}
]
export const about =[{
  id:1, title:'Servis',info:['Jain','marcus','Sidni']
},{
  id:2, title:'Bervis',info:['Bain','Barcus','Bidni']
}]
