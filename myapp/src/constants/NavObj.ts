export interface NavItem {  id: string;  title: string;  href: string;  submenu?: SubmenuItem[];}

export interface SubmenuItem {  title: string;  href: string;}


export const navObj:NavItem[] = [

  { id: '1', title: 'HOME', href: '/' },
  {
    id: '2', title: 'CURRICULUM', href: '',
    submenu: [
        { title: 'Course Outline', href: '/courseoutline' },
        { title: 'Syllabus', href: '/syllabus' },
        { title: 'Timetable', href: '/timetable' }
    ]
  },
  {
    id: '3', title: 'EXTRA CURRICULUM', href: '',
    submenu: [
      { title: 'Game Competition', href: '/games' },
      { title: 'Sports', href: '/sports' },
      { title: 'Health', href: '/health' },
    
    ]
  },
  {
    id: '4', title: 'INFORMATION', href: '', 
    submenu: [
      
      { title: 'News Updates', href: '/news' },
      { title: 'Annoucements', href: '/announcements' }
    ]
  },
  {
    id: '5', title: 'ADMISSION INFO', href: '',
    submenu: [
      { title: 'Admission Student Form', href: '/admissionstudentform' },            
      { title: 'Admission Process', href: '/admissionprocess' },
      { title: 'Apply', href: '/apply' },      
      { title: 'Fee', href: '/fee' },
      { title: 'Term Dates', href: '/termdates' },
    ]
  },
  {
    id: '6', title:'CONTACT', href: '/contact'
  },
  {
    id: '7', title: 'LogIn', href: '',
    submenu: [
      { title: 'Admin LogIn', href: '/loginadmin' },      
      { title: 'Principal LogIn', href: '/loginprincipal' },
      { title: 'Coordinator LogIn', href: '/logincoordinator' },
      { title: 'Teacher LogIn', href: '/loginteacher' },
      { title: 'Student LogIn', href: '/loginstudent' },
    ]
  }
];
