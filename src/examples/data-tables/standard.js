import { sampleSize } from 'lodash'

import data from './standardData'

const orders = [
  {
    orderId: Math.trunc(Math.random() * 10000),
    country: 'Austria',
    address: 'Kirchgasse 6',
    shipName: 'Ernst Handel'
  },
  {
    orderId: Math.trunc(Math.random() * 10000),
    country: 'Finland',
    address: 'Torikatu 38',
    shipName: 'Wartian Herkku'
  },

  {
    orderId: Math.trunc(Math.random() * 10000),
    country: 'Italy',
    address: 'Via Ludovico il Moro 22',
    shipName: 'Magazzini Alimentari Riuniti'
  },

  {
    orderId: Math.trunc(Math.random() * 10000),
    country: 'Germany',
    address: 'Taucherstraße 10',
    shipName: 'QUICK-Stop'
  },

  {
    orderId: Math.trunc(Math.random() * 10000),
    country: 'Brazil',
    address: 'Av. Inês de Castro, 414',
    shipName: 'Tradiçao Hipermercados'
  },

  {
    orderId: Math.trunc(Math.random() * 10000),
    country: 'Mexico',
    address: 'Avda. Azteca 123',
    shipName: 'Tortuga Restaurante'
  },

  {
    orderId: Math.trunc(Math.random() * 10000),
    country: 'Spain',
    address: 'Gran Vía, 1',
    shipName: 'Romero y tomillo'
  },

  {
    orderId: Math.trunc(Math.random() * 10000),
    country: 'France',
    address: '67, rue des Cinquante Otages',
    shipName: 'Du monde entier'
  },

  {
    orderId: Math.trunc(Math.random() * 10000),
    country: 'USA',
    address: '2817 Milton Dr.',
    shipName: 'Rattlesnake Canyon Grocery'
  }
]

export default {
  data () {
    return {
      ...data
    }
  },

  filters: {
    getSubItems (props) {
      return [
        {
          orderId: Math.trunc(Math.random() * 10000),
          country: props.item.medication,
          address: `${props.item.quantity} ${props.item.directions}`,
          shipName: props.item.directions
        },

        ...sampleSize(orders, 5)
      ]
    }
  }
}
