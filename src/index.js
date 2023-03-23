import './styles.css'

const name = document.getElementById('name')
const surname = document.getElementById('surname')
const nickname = document.getElementById('nickname')
const email = document.getElementById('email')
const country = document.getElementById('country')
const password = document.getElementById('password')
const confirm = document.getElementById('passwordConfirmation')

const form = document.getElementById('form')

name.addEventListener('input', () => {
    const input = document.querySelector('.name>input')
    const error = document.querySelector('.name>.error')
    if (input.value.length < 3) {
        error.textContent = `Name can't be shorter than 3`
        input.classList.remove('valid')
    } else {
        error.textContent = ``
        input.classList.add('valid')
    }
})

surname.addEventListener('input', () => {
    const input = document.querySelector('.surname>input')
    const error = document.querySelector('.surname>.error')
    if (input.value.length < 3) {
        error.textContent = `Name can't be shorter than 3`
        input.classList.remove('valid')
    } else {
        error.textContent = ``
        input.classList.add('valid')
    }
})

nickname.addEventListener('input', () => {
    const input = document.querySelector('.nickname>input')
    const error = document.querySelector('.nickname>.error')
    const nicknames = ['kyzo', 'mmani', 'kzo']
    if (nicknames.includes(input.value)) {
        error.textContent = `Username taken`
        input.classList.remove('valid')
    } else {
        error.textContent = ``
        input.classList.add('valid')
    }
})

email.addEventListener('input', () => {
    const input = document.querySelector('.email>input')
    const error = document.querySelector('.email>.error')
    if (
        input.value.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
        error.textContent = ``
        input.classList.add('valid')
    } else {
        error.textContent = `Not an email`
        input.classList.remove('valid')
    }
})

country.addEventListener('input', () => {
    const input = document.querySelector('.country>input')
    const error = document.querySelector('.country>.error')
    if (countries.includes(input.value)) {
        error.textContent = ``
        input.classList.add('valid')
    } else {
        error.textContent = `Not a real country`
        input.classList.remove('valid')
    }
})

password.addEventListener('input', () => {
    const input = document.querySelector('.password>input')
    const error = document.querySelector('.password>.error')
    if (input.value.match(/^(?=.*[\W_])(?=.*\d).{8,}$/)) {
        error.textContent = ``
        input.classList.add('valid')
    } else {
        error.textContent = `min. 8, one number, one special`
        input.classList.remove('valid')
    }
})

confirm.addEventListener('input', () => {
    const password = document.querySelector('.password>input')
    const input = document.querySelector('.confirm>input')
    const error = document.querySelector('.confirm>.error')
    if (input.value === password.value) {
        error.textContent = ``
        input.classList.add('valid')
    } else {
        error.textContent = `Passwords does not match`
        input.classList.remove('valid')
    }
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
})

const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Central African Republic (CAR)',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo, Democratic Republic of the',
    'Congo, Republic of the',
    'Costa Rica',
    'Cote dIvoire',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czechia',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini (formerly Swaziland)',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar (formerly Burma)',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Korea',
    'North Macedonia (formerly Macedonia)',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Korea',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Timor-Leste (formerly East Timor)',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates (UAE)',
    'United Kingdom (UK)',
    'United States of America (USA)',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City (Holy See)',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe',
]
