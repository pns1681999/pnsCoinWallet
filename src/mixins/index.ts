import {Component, Vue} from 'vue-property-decorator'

@Component({})
export class DeviceMixin extends Vue {
    get isDesktop() {
        return this.$q.screen.gt.xs;
    }
}