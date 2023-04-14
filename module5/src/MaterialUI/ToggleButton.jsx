import React, { useState } from 'react'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { Stack, ToggleButtonGroup } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';

function ToggleButton() {
    let[formats,setFormats]=useState(() => ['bold', 'italic']);
    const handleFormatChange=()=>{

    }
  return (
    <div>
        <Stack direction="row">
            <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleFormatChange}>
                <ToggleButton value="bold" aria-label="bold">
                    <FormatBoldIcon/>
                </ToggleButton>
                <ToggleButton value="italic" aria-label="italic">
                    <FormatItalicIcon/>
                </ToggleButton>
                <ToggleButton value="underline" aria-label="underline">
                    <FormatUnderlinedIcon/>
                </ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </div>
  )
}

export default ToggleButton