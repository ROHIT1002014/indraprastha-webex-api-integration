<template>
  <div class="rooms container">
    <div class="row mb-2">
      <button type="button" class="btn btn-primary">Create Room</button>
    </div>
    <div class="row">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">created</th>
            <th scope="col">creatorId</th>
            <th scope="col">id</th>
            <th scope="col">isLocked</th>
            <th scope="col">lastActivity</th>
            <th scope="col">ownerId</th>
            <th scope="col">title</th>
          </tr>
        </thead>
        <tbody v-for="room in rooms" :key="room.created">
          <tr>
            <th>{{room.created}}</th>
            <td>{{room.creatorId}}</td>
            <td>{{room.id}}</td>
            <td>{{room.isLocked}}</td>
            <td>{{room.lastActivity}}</td>
            <td>{{room.ownerId}}</td>
            <td>{{room.title}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters ({
        rooms: "rooms",
    }),
  },
  created(){
    this.$store.dispatch('fetchAllRooms');
  },
}
</script>
