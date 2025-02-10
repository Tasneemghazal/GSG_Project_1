const drawerWidth = 210;

export const box =() =>({
    display:'flex,'
});
export const drawer =() =>({
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      bgcolor: 'white', 
      borderRight: '1px solid shadow',
    },
});
export const list = () =>({
    bgcolor: 'transparent',
                  '&:hover': {
                    borderRadius:'10px',
                    bgcolor: '#3572EF', 
                    
                  },
                  '&.active': {
                    borderRadius:'10px',
                    border: '10px solid #050C9C',
                    bgcolor: '#3572EF', 
                    color: 'white', 
                  },
});
export const listItemText = () =>({
    color: '#050C9C', 
     '&.active': {
        color: 'white', 
        },
})