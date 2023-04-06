import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
	borderBottom: 0,
  },
  '&:before': {
	display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
	expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
	{...props}
  />
))(({ theme }) => ({
  backgroundColor:
	theme.palette.mode === 'dark'
	  ? 'rgba(255, 255, 255, .05)'
	  : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
	transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
	marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

type dataAttr = {
	name: string,
	description: string,
	html_url: string
}

type CustomizedAccordionsProps = {
	data: dataAttr[]
}

export default function CustomizedAccordions({data}: CustomizedAccordionsProps) {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
	(panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
	  setExpanded(newExpanded ? panel : false);
	};

  return (
	<div>
	  {
		data.map((item: dataAttr, index: number) => {
		  return (
		  	<div key={index}>
		  	<ThemeProvider theme={theme}>
				  <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
					<AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
					  <Typography>{item.name}</Typography>
					</AccordionSummary>
					<AccordionDetails>
					  <Typography>
					  	{item.description}
					  </Typography>
					  <div className="badges">
					  	<img className="badge" src={`https://img.shields.io/github/last-commit/wdpedroborges/${item.name}`}/>
					  	<a className="badge" href={item.html_url} target="_blank"><img src={`https://img.shields.io/badge/git-code-black`}/></a>
					  	<a className="badge" href={`https://wdpedroborges.github.io/${item.name}`} target="_blank"><img src={`https://img.shields.io/badge/git-live demo-black`}/></a>
					  </div>
					</AccordionDetails>
				  </Accordion>
			  
		  	
		  	</ThemeProvider>
		  	</div>
		  )
		})
	  }
	</div>
  );
}