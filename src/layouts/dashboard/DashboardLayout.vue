<template>
    <q-layout view="lHh lpr fFf" class="auth-background">
  
      <q-header reveal elevated class="bg-primary text-white" height-hint="98">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
  
          <q-toolbar-title>
            <q-avatar>
              <img src="images/logo.png">
            </q-avatar>
            Menu
          </q-toolbar-title>
          <span>Profile</span>
          <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
        </q-toolbar>
  
        <q-tabs align="left">
          <q-route-tab to="/page1" label="Page One" />
          <q-route-tab to="/page2" label="Page Two" />
          <q-route-tab to="/page3" label="Page Three" />
        </q-tabs>
      </q-header>
  
      <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" elevated>
        <q-list separator>
          <q-item  v-for="(item,index) in accessMenu"
          :key="index"
          :to="item.route"
          v-ripple
          clickable
          >
          <q-avatar>
            <q-icon :name="item.icon"></q-icon>
          </q-avatar>
          <q-item-section><q-item-label class="q-ml-md">{{ item.name }}</q-item-label></q-item-section>
          </q-item>
        </q-list>
      </q-drawer>
  
      <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" bordered>
        <div class="avatarBox row items-center justify-center">
          <q-avatar size="150px" class="overlapping">
            <q-img :src="profileTemp.avatar"/>
          </q-avatar>
        </div>
        <div class="q-pa-md row items-center q-gutter-md justify-center">
          <q-card flat bordered class="text-center">
            <q-card-section>
              <div class="text-h3">Profile</div>
            </q-card-section>
            <q-separator inset/>
            <q-card-section class="q-pt-none">
              <div class="text-h6">Username</div>
              {{ profileTemp.username }}
            </q-card-section>
            <q-separator inset/>
            <q-card-section>
              <div class="text-h6">Email</div>
              {{ profileTemp.email }}
            </q-card-section>
          </q-card>
        </div>
        <div class="q-pa-md q-gutter-sm text-center">
          <q-btn
          class="full-width"
          label="Upadate"
          color="light-blue-8"
          @click="profileTemp.model=true"
          />
          <q-btn
          class="full-width"
          label="Log Out"
          color="light-blue-8"
          @click="Logout()"
          />
          <q-dialog v-model="profileTemp.model" persistent>
            <q-card style="min-width: 350px">
              <q-card-section>
                <div class="text-h6">Update Profile</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <q-input dense v-model="profileTemp.username" label="username" />
              </q-card-section>
              <q-card-section class="q-pt-none">
                <q-input dense v-model="profileTemp.email" label="email" />
              </q-card-section>
              <q-card-section class="q-pt-none">
                <q-input dense v-model="profileTemp.password" label="password" />
              </q-card-section>
              <q-card-section class="q-pt-none">
                <q-file
                    v-model="profileTemp.newAvatar"
                    ref="avatarState"
                    filled
                    bottom-slots
                    label="Avatar"
                    counter
                  >
                    <template v-slot:prepend>
                      <q-icon name="cloud_upload" @click.stop.prevent />
                    </template>
                    <template v-slot:append>
                      <q-icon
                        name="close"
                        @click.stop.prevent="profileTemp.newAvatar = null"
                        class="cursor-pointer"
                      />
                    </template>
  
                    <template v-slot:hint> File Size </template>
                  </q-file>
              </q-card-section>
              <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Update" @click="Update()" />
                <q-btn flat label="Add address" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>
      </q-drawer>
  
      <q-page-container>
        <router-view />
      </q-page-container>
  
      <q-footer elevated class="bg-grey-8 text-white">
        <q-toolbar>
          <q-toolbar-title>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            </q-avatar>
            <div>Title</div>
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>
  
    </q-layout>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { accessMenu } from 'components/ts/MenuComponent';
  import { profileTemp } from 'components/ts/ProfileComponent';
  export default {
    setup () {
      const leftDrawerOpen = ref(false)
      const rightDrawerOpen = ref(false)
  
      return {
        leftDrawerOpen,
        toggleLeftDrawer () {
          leftDrawerOpen.value = !leftDrawerOpen.value
        },
  
        rightDrawerOpen,
        toggleRightDrawer () {
          rightDrawerOpen.value = !rightDrawerOpen.value
        },
        accessMenu,
        profileTemp,
        Update(){
          console.log(profileTemp.value)
        },
        Logout(){
          console.log('Logged Out');
        }
      }
    }
  }
  </script>