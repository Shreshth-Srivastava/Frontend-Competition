const trial = document.querySelector('#trial');
const shine = document.querySelector('#shine');
const theme = document.querySelector('#theme');
const Ratings = document.querySelector('#Ratings');
const Hero = document.querySelector('#Hero');
const Stats = document.querySelector('#Stats');
const Graph = document.querySelector('#Graph');
const Customers = document.querySelector('#Customers');
const Cards = document.querySelector('#Cards');
const loader = document.querySelector('#loader');
const loading = document.querySelector('#loading');
const progress = document.querySelector('#progress');
const body = document.querySelector('body');
const navbtns = [...document.querySelectorAll('#navbar>span')]
const root = document.documentElement;

window.addEventListener('load', ()=>{
    progress.style.width = '100%';
    setTimeout(()=>{
        loader.style.display = 'none';
    },3000)
})

navbtns.forEach(element => {
    element.addEventListener('click', ()=>{
        if(navbtns.indexOf(element) == 0){
            Hero.scrollIntoView();
        }
        if(navbtns.indexOf(element) == 1){
            Stats.scrollIntoView();
        }
        if(navbtns.indexOf(element) == 2){
            Graph.scrollIntoView();
        }
        if(navbtns.indexOf(element) == 3){
            Customers.scrollIntoView();
        }
        if(navbtns.indexOf(element) == 4){
            Cards.scrollIntoView();
        }
    })
});

trial.addEventListener('mouseover', ()=>{
    shine.style.display = 'block';
})

trial.addEventListener('mouseleave', ()=>{
    shine.style.display = 'none';
})

var flag = false;
var lightblue =  'hsl(180, 100%, 40%)';
var darkblue = 'hsl(240, 100%, 10%)';
var fontcolor = 'white';

theme.addEventListener('click', ()=>{
    // Get CSS custom properties
    // var lightblue = getComputedStyle(root).getPropertyValue('--light-blue');
    // var darkblue = getComputedStyle(root).getPropertyValue('--dark-blue');
    // var fontcolor = getComputedStyle(root).getPropertyValue('--font-color');

    if(!flag){
        theme.innerHTML = '☀️';
        // Set CSS custom properties
        root.style.setProperty('--light-blue', darkblue);
        root.style.setProperty('--dark-blue', '#dadada');
        root.style.setProperty('--font-color', 'black');
        Ratings.style.color = 'grey';
        flag = true;
    }
    else{
        theme.innerHTML = '🌙';
        root.style.setProperty('--light-blue', lightblue);
        root.style.setProperty('--dark-blue', darkblue);
        root.style.setProperty('--font-color', fontcolor);
        Ratings.style.color = 'white';
        flag = false;
    }
})

// Animate progress bars on load
function animateBars() {
    const bars = document.querySelectorAll('.timeline-bar');
    
    bars.forEach((bar, index) => {
        setTimeout(() => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        }, index * 100);
    });
}

// Add click handlers for footer actions
function addClickHandlers() {
    const footers = document.querySelectorAll('.card-footer');
    
    footers.forEach(footer => {
        footer.addEventListener('click', () => {
            const text = footer.querySelector('span').textContent;
            if (text.includes('breakdown')) {
                console.log('Show carbon footprint breakdown');
                alert('Opening carbon footprint breakdown...');
            } else if (text.includes('Download')) {
                console.log('Download data');
                alert('Downloading data...');
            }
        });
    });
}

// Format numbers with commas
function formatNumbers() {
    const values = document.querySelectorAll('.timeline-value');
    values.forEach(value => {
        const num = parseInt(value.textContent.replace(/,/g, ''));
        if (num >= 1000) {
            value.textContent = num.toLocaleString();
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(animateBars, 500);
    addClickHandlers();
    formatNumbers();
});

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.metric-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-20px)';
            card.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            card.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        });
    });
});

const data = [
    { value: 549, type: 'refurbishment', status: 'complete' },
    { value: 278, type: 'refurbishment', status: 'complete' },
    { value: 875, type: 'new-build', status: 'complete' },
    { value: 617, type: 'new-build', status: 'complete' },
    { value: 506, type: 'refurbishment', status: 'complete' },
    { value: 36, type: 'refurbishment', status: 'complete' },
    { value: 185, type: 'new-build', status: 'estimate' },
    { value: 131, type: 'refurbishment', status: 'estimate' },
    { value: 122, type: 'refurbishment', status: 'complete' },
    { value: 550, type: 'new-build', status: 'complete' },
    { value: 881, type: 'new-build', status: 'complete' },
    { value: 539, type: 'refurbishment', status: 'complete' },
    { value: 269, type: 'refurbishment', status: 'complete' },
    { value: 29, type: 'refurbishment', status: 'complete' },
    { value: 82, type: 'refurbishment', status: 'complete' },
    { value: 44, type: 'refurbishment', status: 'complete' },
    { value: 109, type: 'refurbishment', status: 'complete' },
    { value: 106, type: 'refurbishment', status: 'complete' },
    { value: 607, type: 'new-build', status: 'complete' },
    { value: 528, type: 'new-build', status: 'complete' }
];

let currentTypeFilter = 'all';
let currentStatusFilter = 'complete';

function createBars() {
    const container = document.getElementById('barsContainer');
    container.innerHTML = '';
    
    data.forEach((item, index) => {
        const bar = document.createElement('div');
        bar.className = `bar ${item.status}`;
        bar.style.height = `${(item.value / 1200) * 100}%`;
        
        const value = document.createElement('div');
        value.className = 'bar-value';
        value.textContent = item.value;
        bar.appendChild(value);
        
        bar.dataset.type = item.type;
        bar.dataset.status = item.status;
        
        container.appendChild(bar);
    });
    
    // Animate bars on load
    setTimeout(() => {
        const bars = container.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.height = `${(data[index].value / 1200) * 100}%`;
            }, index * 50);
        });
    }, 100);
}

function filterBars() {
    const bars = document.querySelectorAll('.bar');
    
    bars.forEach((bar, index) => {
        const itemType = bar.dataset.type;
        const itemStatus = bar.dataset.status;
        
        const typeMatch = currentTypeFilter === 'all' || itemType === currentTypeFilter;
        const statusMatch = currentStatusFilter === 'all' || itemStatus === currentStatusFilter;
        
        if (typeMatch && statusMatch) {
            bar.classList.remove('hidden');
        } else {
            bar.classList.add('hidden');
        }
    });
}

// Filter button event listeners
document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentTypeFilter = btn.dataset.filter;
        filterBars();
    });
});

document.querySelectorAll('[data-status]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('[data-status]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentStatusFilter = btn.dataset.status;
        filterBars();
    });
});

// Download button
// document.querySelector('.download-btn').addEventListener('click', () => {
//     alert('Download functionality would be implemented here');
// });

// Initialize
createBars();

// List of brands to cycle through
const brands = [
    'Apple','Google','Microsoft','Amazon','Facebook',
    'Netflix','Tesla','Nike','Samsung','Adobe',
    'Intel','Oracle','Spotify','Uber','Zoom'
  ];
  
  // Grab all .brand spans
  const cells = document.querySelectorAll('.cell .brand');
  
  cells.forEach((el, idx) => {
    let i = idx; // start offset so each cell is different
    const delay = idx * 300; // stagger start by 300ms per cell
  
    // function to update text
    function update() {
      // fade out
      el.classList.add('fade-out');
      setTimeout(() => {
        el.textContent = brands[i % brands.length];
        // fade in
        el.classList.remove('fade-out');
        i++;
      }, 750);
    }
  
    // initial delayed update, then every 2s
    setTimeout(() => {
      update();
      setInterval(update, 4000);
    }, delay);
  });

  document.querySelectorAll('.card__item').forEach(item => {
    item.addEventListener('click', () => {
      const cb = item.querySelector('.card__checkbox');
      cb.checked = !cb.checked;
      item.classList.toggle('selected', cb.checked);
    });
  });
