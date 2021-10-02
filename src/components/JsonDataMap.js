import React from 'react'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';



export default function JsonDataMap(props) {
    const item = props.item;
    return (
        <><ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt={item.first_name + item.last_name} src={item.avatar} />
            </ListItemAvatar>
            <ListItemText
                primary={item.first_name + " " + item.last_name}
                secondary={
                    <>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {item.job}
                        </Typography >
                        <Typography
                            component="div"
                            variant="caption"
                        >
                            {item.company}
                        </Typography>
                    </>
                }
            />
        </ListItem>
            <Divider variant="inset" component="li" />
        </>

    )
}
