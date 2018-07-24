import moment from 'moment'

const now = new Date()
const year = 365 * 24 * 60 * 60

const getRandomDate = () => new Date(now.getTime() + Math.random() * year)

const data = {
  header: [
    {
      text: 'Medication',
      value: 'medication',
      sortable: false
    },
    {
      text: 'Directions',
      value: 'directions',
      sortable: false
    },
    {
      text: 'Start Date',
      value: 'startDate',
      sortable: false
    },
    {
      text: 'End Date',
      value: 'endDate',
      sortable: false
    },
    {
      text: 'Quantity',
      value: 'quantity',
      sortable: false
    },
    {
      text: 'Refill',
      value: 'refill',
      sortable: false
    },
    {
      text: 'External',
      value: 'external',
      sortable: false
    }
  ],
  items: [
    {
      id: 1,
      loading: false,
      medication: 'Frozen Yogurt',
      directions: 'Lorem ipsum',
      startDate: moment(getRandomDate()).format('L'),
      endDate: moment(getRandomDate()).format('L'),
      quantity: Math.trunc(Math.random() * 100),
      refill: false,
      external: false
    },
    {
      id: 2,
      loading: false,
      medication: 'Ice cream sandwich',
      directions: 'Lorem ipsum',
      startDate: moment(getRandomDate()).format('L'),
      endDate: moment(getRandomDate()).format('L'),
      quantity: Math.trunc(Math.random() * 100),
      refill: false,
      external: false
    },
    {
      id: 3,
      loading: false,
      medication: 'Eclair',
      directions: 'Lorem ipsum',
      startDate: moment(getRandomDate()).format('L'),
      endDate: moment(getRandomDate()).format('L'),
      quantity: Math.trunc(Math.random() * 100),
      refill: false,
      external: false
    },
    {
      id: 4,
      loading: false,
      medication: 'Cupcake',
      directions: 'Lorem ipsum',
      startDate: moment(getRandomDate()).format('L'),
      endDate: moment(getRandomDate()).format('L'),
      quantity: Math.trunc(Math.random() * 100),
      refill: false,
      external: false
    },
    {
      id: 5,
      loading: false,
      medication: 'Gingerbread',
      directions: 'Lorem ipsum',
      startDate: moment(getRandomDate()).format('L'),
      endDate: moment(getRandomDate()).format('L'),
      quantity: Math.trunc(Math.random() * 100),
      refill: false,
      external: false
    },
    {
      id: 6,
      loading: false,
      medication: 'Jelly bean',
      directions: 'Lorem ipsum',
      startDate: moment(getRandomDate()).format('L'),
      endDate: moment(getRandomDate()).format('L'),
      quantity: Math.trunc(Math.random() * 100),
      refill: false,
      external: false
    },
    {
      id: 7,
      loading: false,
      medication: 'Lollipop',
      directions: 'Lorem ipsum',
      startDate: moment(getRandomDate()).format('L'),
      endDate: moment(getRandomDate()).format('L'),
      quantity: Math.trunc(Math.random() * 100),
      refill: false,
      external: false
    },
    {
      id: 8,
      loading: false,
      medication: 'Honeycomb',
      directions: 'Lorem ipsum',
      startDate: moment(getRandomDate()).format('L'),
      endDate: moment(getRandomDate()).format('L'),
      quantity: Math.trunc(Math.random() * 100),
      refill: false,
      external: false
    },
    {
      id: 9,
      loading: false,
      medication: 'Donut',
      directions: 'Lorem ipsum',
      startDate: moment(getRandomDate()).format('L'),
      endDate: moment(getRandomDate()).format('L'),
      quantity: Math.trunc(Math.random() * 100),
      refill: false,
      external: false
    },
    {
      id: 10,
      loading: false,
      medication: 'KitKat',
      directions: 'Lorem ipsum',
      startDate: moment(getRandomDate()).format('L'),
      endDate: moment(getRandomDate()).format('L'),
      quantity: Math.trunc(Math.random() * 100),
      refill: false,
      external: false
    }
  ],

  subHeader: [
    {
      text: 'Order ID',
      value: 'orderId',
      sortable: false
    },

    {
      text: 'Ship Country',
      value: 'country',
      sortable: false
    },

    {
      text: 'Ship Address',
      value: 'address',
      sortable: false
    },

    {
      text: 'Ship Name',
      value: 'shipName',
      sortable: false
    }
  ]
}

export default data
