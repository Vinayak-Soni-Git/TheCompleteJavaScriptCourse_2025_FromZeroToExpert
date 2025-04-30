const day = 'monday'

switch (day) {
    case 'monday':
        console.log('Monday')
        console.log('Plan course structure')
        console.log('Go to coding meetup')
        break
    case 'tuesday':
        console.log('Tuesday')
        console.log('Prepare theory videos')
        break
    case 'wednesday':
        console.log('Wednesday')
        break
    case 'thursday':
        console.log('Thursday')
        console.log('Write code examples')
        break
    case 'friday':
        console.log('Friday')
        console.log('record videos')
        break
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend')
        break
    default:
        console.log('not a valid day!')
}
