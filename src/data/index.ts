export type NavigationLinks = Navigate[]
type Navigate ={
  title:string
  path:string
}

export const navigationLinks:NavigationLinks = [
	{ title: 'Главная', path: '/' },
	{ title: 'О Нас', path: '/about' },
	{ title: 'Каталог продукции', path: '/catalog' },
  {title:'Контакты',path:'/contacts'}
]
export const about =[{
  id:1, title:'Servis',info:['Jain','marcus','Sidni']
},{
  id:2, title:'Bervis',info:['Bain','Barcus','Bidni']
}]
