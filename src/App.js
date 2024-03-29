import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Temporal } from 'temporal-polyfill'
import { SequenceAnimator } from 'react-sequence-animator';
// import logo from './images/intro.png'

import i00 from './images/intro/Chameleon_LT_IPP_Block_Opener_00000.png';
import i01 from './images/intro/Chameleon_LT_IPP_Block_Opener_00001.png';
import i02 from './images/intro/Chameleon_LT_IPP_Block_Opener_00002.png';
import i03 from './images/intro/Chameleon_LT_IPP_Block_Opener_00003.png';
import i04 from './images/intro/Chameleon_LT_IPP_Block_Opener_00004.png';
import i05 from './images/intro/Chameleon_LT_IPP_Block_Opener_00005.png';
import i06 from './images/intro/Chameleon_LT_IPP_Block_Opener_00006.png';
import i07 from './images/intro/Chameleon_LT_IPP_Block_Opener_00007.png';
import i08 from './images/intro/Chameleon_LT_IPP_Block_Opener_00008.png';
import i09 from './images/intro/Chameleon_LT_IPP_Block_Opener_00009.png';
import i10 from './images/intro/Chameleon_LT_IPP_Block_Opener_00010.png';
import i11 from './images/intro/Chameleon_LT_IPP_Block_Opener_00011.png';
import i12 from './images/intro/Chameleon_LT_IPP_Block_Opener_00012.png';
import i13 from './images/intro/Chameleon_LT_IPP_Block_Opener_00013.png';
import i14 from './images/intro/Chameleon_LT_IPP_Block_Opener_00014.png';
import i15 from './images/intro/Chameleon_LT_IPP_Block_Opener_00015.png';
import i16 from './images/intro/Chameleon_LT_IPP_Block_Opener_00016.png';
import i17 from './images/intro/Chameleon_LT_IPP_Block_Opener_00017.png';
import i18 from './images/intro/Chameleon_LT_IPP_Block_Opener_00018.png';
import i19 from './images/intro/Chameleon_LT_IPP_Block_Opener_00019.png';
import i20 from './images/intro/Chameleon_LT_IPP_Block_Opener_00020.png';
import i21 from './images/intro/Chameleon_LT_IPP_Block_Opener_00021.png';
import i22 from './images/intro/Chameleon_LT_IPP_Block_Opener_00022.png';
import i23 from './images/intro/Chameleon_LT_IPP_Block_Opener_00023.png';
import i24 from './images/intro/Chameleon_LT_IPP_Block_Opener_00024.png';
import i25 from './images/intro/Chameleon_LT_IPP_Block_Opener_00025.png';
import i26 from './images/intro/Chameleon_LT_IPP_Block_Opener_00026.png';
import i27 from './images/intro/Chameleon_LT_IPP_Block_Opener_00027.png';
import i28 from './images/intro/Chameleon_LT_IPP_Block_Opener_00028.png';
import i29 from './images/intro/Chameleon_LT_IPP_Block_Opener_00029.png';
import i30 from './images/intro/Chameleon_LT_IPP_Block_Opener_00030.png';
import i31 from './images/intro/Chameleon_LT_IPP_Block_Opener_00031.png';
import i32 from './images/intro/Chameleon_LT_IPP_Block_Opener_00032.png';
import i33 from './images/intro/Chameleon_LT_IPP_Block_Opener_00033.png';
import i34 from './images/intro/Chameleon_LT_IPP_Block_Opener_00034.png';
import i35 from './images/intro/Chameleon_LT_IPP_Block_Opener_00035.png';
import i36 from './images/intro/Chameleon_LT_IPP_Block_Opener_00036.png';
import i37 from './images/intro/Chameleon_LT_IPP_Block_Opener_00037.png';
import i38 from './images/intro/Chameleon_LT_IPP_Block_Opener_00038.png';
import i39 from './images/intro/Chameleon_LT_IPP_Block_Opener_00039.png';
import i40 from './images/intro/Chameleon_LT_IPP_Block_Opener_00040.png';
import i41 from './images/intro/Chameleon_LT_IPP_Block_Opener_00041.png';
import i42 from './images/intro/Chameleon_LT_IPP_Block_Opener_00042.png';
import i43 from './images/intro/Chameleon_LT_IPP_Block_Opener_00043.png';
import i44 from './images/intro/Chameleon_LT_IPP_Block_Opener_00044.png';
import i45 from './images/intro/Chameleon_LT_IPP_Block_Opener_00045.png';
import i46 from './images/intro/Chameleon_LT_IPP_Block_Opener_00046.png';
import i47 from './images/intro/Chameleon_LT_IPP_Block_Opener_00047.png';
import i48 from './images/intro/Chameleon_LT_IPP_Block_Opener_00048.png';
import i49 from './images/intro/Chameleon_LT_IPP_Block_Opener_00049.png';

const introImages = [
  i00, i01, i02, i03, i04, i05, i06, i07, i08, i09,
  i10, i11, i12, i13, i14, i15, i16, i17, i18, i19,
  i20, i21, i22, i23, i24, i25, i26, i27, i28, i29,
  i30, i31, i32, i33, i34, i35, i36, i37, i38, i39,
  i40, i41, i42, i43, i44, i45, i46, i47, i48, i49,
];

const iplayerPink = '#f54997';

const urls = {
  test: 'https://jfayiszondlcqngo5vavioz6bq0ibxen.lambda-url.eu-west-1.on.aws/',
  live: 'https://ypdjc6zbc5cnvth24lk3mm45sm0qtgps.lambda-url.eu-west-1.on.aws'
};

function titlefor(o, rel) {
  return o.title_hierarchy?.titles?.find((t) => t.inherited_from?.link?.rel === `pips-meta:${rel}`)?.title?.$;
}

function longtitle(item) {
  const b = titlefor(item, 'brand');
  const s = titlefor(item, 'series');
  const e = item.title_hierarchy?.titles?.find((t) => !t.inherited_from)?.title?.$;
  const t = b ? `${b} / ` : '';
  if (s) {
    return `${t}${s} / ${e}`;
  }
  return `${t}${e}`;
}

function chooseNext(next, minDuration) {
  const ok = (next || []).filter((e) => {
    if (e?.duration && e?.title) {
      return Temporal.Duration.compare(minDuration, Temporal.Duration.from(e.duration)) < 0;
    }
    return false;
  });
  if (ok.length > 0) {
    return ok[0];
  }
  return { title: '' };
}

function NowNext({ now, next, previewMinutes }) {

  let r;
  let text;
  if (next) {
    const start = Date.parse(next.start);
    const minutesToNext = Math.round((start - (new Date())) / 1000 / 60);
    console.log('minutes to next start', minutesToNext);
    if (minutesToNext <= 0) {
      r = '';
    }
    if (minutesToNext < previewMinutes) {
      r = `next up: ${longtitle(next)}`;
    }
  }
  if (r) {
    text = r;
  } else {
    if (now) {
      text = longtitle(now);
    } else {
      text = '';
    }
  }
  return (
    <Fade in={true} timeout={500}><Typography fontSize={'3.5rem'} ce>{text}</Typography></Fade>
  );
}

function Bottom({ params }) {

  const minDuration = Temporal.Duration.from(params.minDuration || 'PT2M');
  const previewMinutes = parseInt(params.next || '10', 10);
  const env = params.env || 'live';
  const sid = params.sid || 'History_Channel';
  const region = params.region || 'eu-west-2';

  const [on, setOn] = useState(false);
  const [now, setNow] = useState();
  const [next, setNext] = useState();
  const [steady, setSteady] = useState(false);

  const FALSE = false;

  // 5 second timer
  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      (async () => {
        const sOfm = (new Date()).getSeconds();
        if ((sOfm / 2) < 12) {
          setOn(true);
        } else {
          setOn(FALSE);
        }
        const r = await fetch(`${urls[env]}/${sid}/${region}`);
        if (r.ok) {
          const data = await r.json()
          setNext(chooseNext(data.next, minDuration));
          setNow(data.now);
        }
      })();
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <Slide direction="up"
      in={on} mountOnEnter unmountOnExit
      onEntered={() => console.log('entered')}
      addEndListener={() => setSteady(FALSE)}>
      <Box sx={{
        height: 120, width: 'auto', color: 'white',
        background: 'linear-gradient(to right, rgba(15, 15, 15, .7), rgba(245, 73, 151, .7))',
        display: 'grid', gridTemplateColumns: '1fr 4fr 1fr'
      }}>
        <Box>{steady ? <Fade in={true} timeout={1000}>
            <Typography fontSize={'4rem'} color={iplayerPink} marginLeft={5} marginTop={3}>iPLAYER</Typography>
          </Fade>
          : <SequenceAnimator duration={3000} onSequenceEnd={() => setSteady(true)}>
            {introImages.map((im, index) => (<img key={index} src={im} alt='BBC' />))}
          </SequenceAnimator>
        }
        </Box>
        <Box display='flex' alignItems='center'>
          {steady ? (<NowNext now={now} next={next} previewMinutes={previewMinutes} />) : ''}
        </Box>
        <Box></Box>
      </Box>
    </Slide>
  );
}

function TopLeft({ show }) {
  if (show) {
    return '';//<img src={logo} alt='CBeebies' />;
  }
  return '';
}

function TopRight({ show }) {
  if (show) {
    return <img alt='bounce' src='https://upload.wikimedia.org/wikipedia/commons/1/14/Animated_PNG_example_bouncing_beach_ball.png' />;
  }
  return '';
}

export default function App(params) {
  return (
    <Box sx={{
      width: 'auto', height: '100vh',
      display: 'grid', gridTemplateRows: '1fr 6fr 1fr'
    }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        <Box><TopLeft show={params.tl} /></Box>
        <Box></Box>
        <Box sx={{ display: 'block', marginLeft: 'auto' }}><TopRight show={params.tr} /></Box>
      </Box>
      <Box></Box>
      <Bottom params={params} />
    </Box>
  );
}
