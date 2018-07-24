<template>
  <v-data-table
    :headers="header"
    :items="items"
    hide-actions
    class="elevation-1"
    item-key="id"
  >
    <template slot="no-data">
      <v-alert :value="true" color="error" icon="warning">
        Sorry, nothing to display here.
      </v-alert>
    </template>

    <template slot="items" slot-scope="slotProps">
      <tr :key="slotProps.item.id" @click="slotProps.expanded = !slotProps.expanded">
        <td>{{ slotProps.item.medication }}</td>
        <td>{{ slotProps.item.directions }}</td>
        <td>{{ slotProps.item.startDate }}</td>
        <td>{{ slotProps.item.endDate }}</td>
        <td>{{ slotProps.item.quantity }}</td>
        <td>{{ slotProps.item.refill }}</td>
        <td>{{ slotProps.item.external }}</td>
      </tr>
    </template>

    <template slot="progress">
      <v-progress-linear color="red" indeterminate></v-progress-linear>
    </template>

    <template slot="expand" slot-scope="slotProps">
      <v-data-table
        :headers="subHeader"
        :items="slotProps | getSubItems"
        hide-actions
        class="elevation-2 pa-3 grey lighten-2"
      >

        <template slot="no-data">
          <v-alert :value="true" color="error" icon="warning">
            Nothing here, sorry
          </v-alert>
        </template>

        <template slot="items" slot-scope="slotProps">
          <td>{{ slotProps.item.orderId }}</td>
          <td>{{ slotProps.item.country }}</td>
          <td>{{ slotProps.item.address }}</td>
          <td>{{ slotProps.item.shipName }}</td>
        </template>

      </v-data-table>
    </template>

  </v-data-table>
</template>

<script src="./standard.js"></script>
