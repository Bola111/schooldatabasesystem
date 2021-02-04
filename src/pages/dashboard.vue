<template>
  <div>
      <div class="row">
    <q-card class="my-card">
      <q-img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQYAAADACAMAAADRLT0TAAAAeFBMVEX///+ysrL4+Pj19fWSkpKrq6uurq6hoaGlpaXCwsKdnZ3t7e3p6en8/Py+vr6amprb29uDg4O2traVlZWMjIzh4eHKysrFxcVqamrNzc1PT0+GhoZ8fHzU1NRhYWFmZmZycnJaWlogICBJSUkZGRknJydBQUE3NzfdXbsRAAAVFUlEQVR4nO1dDXujKtMGFUEU8DPGqql9z8fz///hOwPGqMm2SWu623N5d2sVUYc7wwzDYJaQHTt27NixY8eOHTt27NixY8eOHTt27NixY8eO/yTUH3SX34lDffgy+h9PQz/k9KvIX/zf3YyvomEb3KTdaUBk8QY3+a3od21A7DRY7DRY7DRY7DRY7DRY7DRY7DRY7DRY7DRY7DRY7DRY7DRY7DRY7DRYNOEGN/n5NMRvx+Nx+Ov17fTX8QX378XL6fSCv7h/+vFzkQ6lr/tM5c0Dl9A+4SythD34sTQsBS/jvM+8h2gI+0qKNBXv3vePR8LFDC9myF74sRP3gotjW769luVpdeKHWQnue3P4ylPwez98+MH6anmfiv/uhj0G8Rzt9X8aDd5TbvuzaFBAw/bqoNQPowFsw5M6hXnKbZ+GKMvK7ZFl/e9u2KMon3DP4gn3fDKeQUPwhHs+GTsNFjsNFjsNFmca5p5TqXEzFapxV92stiz5yTQoMo8JXPsWwYXjZFHJ0bAssjf7sTQowlkIsJsw7GxZF06ggmJRxOm5Egs72+YuHIvwX+GU5vtoiAXbAmGYjTcsPB0BcKPTwn7OItVjSaTd8DiP8aDWNZT0zDa5qGwlu/EDR2kXbiIcY+L9ZUSKMH8Z2n4W6mwbjK7i2C965se+sOMfxSXs614mcdxrO7GS0wMUZRWHbeGiUyPgsp7yNI5jNo6bikdi9Xfg++yDCZxwq9DwQgNOlYgkh61rjpI4T3tIKEhSjTTkKWwDH3sId/GIwTntJKLwuSk60rBZp/A+mikOtwoN36GBYwsPVTijgc5oEDMadPgMGtSHNLCtQsNn0LBZTKE+Sp/U/OvLWu3S1naiIf4FDbNOoentTlHNaQATuY1sNOf1+yxBt2mVvwG8szYUVhtYrGEbOovPUSUbS0xy1oYKaVBYJJw2FEhDXFO8OnRqoIpNRPNV630wx60207xLp+jatnzrXsu2zYyjYYD9oTtB+TBqg8ait/ZUtuXJ0SChoO2Or3B1dtaGrWxDccdM/0bPumhDDA5KoZfyzp6C44EHH603dYre850rU/KsDR4qlf382ca24Z4mbkyD0QIGgoPsaEjL0TZksN+aAQZZRltjlesCRpRvbIAT3WgiAxhFmmzgMNrZ2kT+FhoutmE+bmgStIfJWRusbfCsbZiZyNiOG8h/hoY/y2HuNFh8igY7JzAL/2/NEKyvuIcG+jkabjxr2lerIje3ceUVPq8N7zuYG2dv2YZwpOFXtmE+brjXNjwsGHmEhoPkZxibkA+mYx7gzRszHUuNzzOzCv6FhkBLiLuPEoLksIQTivimhX30FIwVmuO1NC+h6CQGnG7g2HIvCCCqBk8BVwtaXmjwZ4IYbKZeSarmkpKVpIcHaWB+3/cp/PS9wikBJap+RGWjUEmacwVf4hUmsVdghbyaaChzDU7QIczzogep8tmYWOfwPGlLwnMlUZMqyPV0WahpNtEAN+/HByV2NCYnSRuCgnjhRVKrWFxNTfHZgzRQkVRJ0fMkSRjqrTIySVIpqyQpONIgKFQI0hK2WEERWSRVVbC0SkKTTDQcpYNxm64hUSeNkWcYfiQkc6fPlUpN0iOfamD1t4mGxIRJlbKiAvEkaoOA46RMA9hSlNTjRZJUUqZJIg3SIBg0gvcgXuLmuh6gIcT+G8bWsDka4A5+ngMD1NFgT/nCUoZXcCSDRdAfahNPNOhczwFdPaHzglxH0ANXlRLiLypBtYmG2EBY5EcYCQs7c2WbJuznnDsaoMDLcxCEjjTgqTg8t+ohbWA3aIjtzcMLDcLSEF5oEGsarnBttNSNotslMxrEmgZxoSG0H1h8gwb2qDbcR8NcG+RNGq7d27qJSq14UAqjiUXZeLCmQc5omGnDbRrYZ2iw6kMvNHgmtzdXNzrFqA3s0imSr6RrlI/EeDeWOTnbMHUK9utOoewHls9poOQznUI0Td/qsm8apw0y6JuoLA9NX440NIe+rbNzBcKh7iEzddPzr9HgEz+OY+9GX7E0SN43tcmsII4GkDSr2/7QjDSgIGUZNX0gHQ1QoYxakPRxEymqNK0sGLKpDK9GmNFTpGkKxhdqjTQEcA6cRVrNPMWtfv9RqA99Ahe2kOvJYdcpQngEPqgKHA2sQkFgk46ewpwl5aM22IMErhKPawOXfCg68FuOBjlwWXQdDEWOwmmDhAoGSqXVOiIGcG5DZyTv5IUG0s+XBjqDH16KuKyw4yfyUkfmdoqoFuxSq7+YyISDTKYb4DmDcDRMgjhtEEcYSHVdAaVWGxhW6AqowB/WBmsiqY9yh85ETrYhn9sGdq5AJO6KGs7VReJNnaJc31t5iwVMHFtI54Ygj5EGM9eacuYpJNgGr8ZHsouJZHPbkK9sA6pA7n/OU9waN9ztMCs1pWuKuiwKcywHUwBc1gpLunKAbda40KrujDGnACqZjnqx5/lCwn45DAFcpWcxxZccZvgch/kLGorEX4dWySy0GqddcJtcR5iCKxX7JLARZn0VWn3vuCGc0YCZrjMN3m0aQINno8ii8slyZvpGoJ1czTcY69SEsPnDAk9ULmsVzmhIFjTAc2/S4E00qAUNj5lIiPlC5SmW2K2lQVKlEkp9OObo10XueUrEQnkeGGgP8wugylyDQkfGagOOgsYpWeVoEAXm9jHQ9ry6CqG1Ew09jBNkTOE8F0rBhRBoKzgdJnC11QYYTqBosYxAW7SAizlogzcXJMfPA1iGJ1OaKEUl0sDgWIWJ3VJrZO7Whjor/3px+CuAeMgX2dt4/PLWipj0XTFVKLMI9CA72YOX19OpFQnQYA0+0oBz0kADiGVw+TTK6XuHil5mpnOdWhqAdY9hg5RnsDFVlCdwE6QB3ahUXixL9xjAKYNBVLSSNBbtRdJM+KTpgpmk9SPaQIpDXdeHGreAgFTFAfYPdlMfZEqCQ4RHrsqhJHHgDg4HfThEYUNKnH+HthnUDwjTcwJ6VNhhMscPrU4ZlFfRNEHvAQ34iQkBJIGngH1giSZwk7wg9m4F8RpmBbNfnFMfgpiUZ0mhIDoEJDWHehL1UFQgqW0DVoBt8RANuZzBaGjlvACerufH4Cu9wu0JwwWHoRbQgGkHtCEQeldBg4G7kFZDOIf9/CBhSHOwE/Qq13VVxWUvoMhwpMEzeEGTmx5GPkCDj6vwJfGqhSCFB15zjluSmnlB/ggNVwO963jo9nkXJ6ECW21At6DzKNKNxmUdprA9hZe4yKOOaq3DHI2WF2oORaBIUC0btUHqeqykhYHrvBhEuwo01nJcCXrrgqfPTIO0PlozSwOuEVBGF4yHBYdxImsLXOTk80wwOA4YjPZyqw1UlzBmhIGhEGEnnDYUUImLwo0s7Y2XQ6ov4Ok0uBDZG2lAbeAa/4KnQEM90gCWkBwq7hNVWW0AGs4OU2HyztKAlZKIJXAJM9gpYmVzjxtQ8XQaXMrZ80ZtsI4VPQWYSKTBIE2+DMH5HVIBvR1pQI9oaSjAU0BVbhOeYCJ9GF2xCs5bGnAsgSGXH3/5TaPnp2us8qJtRNuAn5v1FJ6AUaRPhIHxIWqDhzRwSwPDhVJu0U/p4zAl5JbLAiuhNsAR0OA8hcIgHNTiSyJ+S9YKtRY+bPQUPg5e7PDJ0oDDGc/SAGoPDpPCEKLSODxQ02Aah0/cLvSCToHakEOnOI8bPIM0eP6Xl2fd7yk0mCuOr8DBb4QlrRiPhCjx04g4Px9z7NKkFdwG0JzzzOYprKMYaeCVG0ViM5SEppO6Yp4bTMPH7GgofegIMKrwQKeUYWBhbdZK+W4U6SmIzFTcMhenw9NafC7l7sH4x0paToKK1koqRzHB1OoHPQWLwcEd7EJF3+UpGrt0EX4bm6fgPpx0Li62KRfZ43lbIU/UNN8gZ1kr6tZXiNlql4hZ0jGzQYp51srGX3GNsRwEzFOgrRJ9OD+ntxP0PHa+9iypFzajoFHj8hS+xjWXeFn8aJ4iRMUVSYgK7SJM5vkJC0GpmQ2tOMXRbQx6CsNf/FSkjSlg8Ovp2SRc/tb+/X+If+D37WR8CBGPL3j8Nxb9XR6BHz3YSv/8jZX+HQroCPJ0ctcB/s5OTnwXWmkQJMc3HLm0oRUIpkwsQRBqaeBQEIcMBGEuwhTQiDDh2KCtAu1lnuIq0L7KU7TpHBVrSESXRVAxSPt5Ua1Jz6tZlTTN1hP0V3mKWYRJ5xHmM+Yb6MN5imObzXFKSXNclLQDIdmy0lCT6m1Rkp0mbbh3voFuMkH/Dg2TNig7Qa/Ok3AzGh6amb7f/a3nG5Z5CjXThpEGuaBBfXLaxeUp1nOR9PZcpJ1MYZH35TzFrzHR4EX2YRdtYO/lKexc5GemXXBmGqxrmZcQ24wz02Vd52UJ0U470gAVMt2BSXYT9DKD3SyACkY+kwZp6kgHGT7d0RDCbqfx6SMNLVQoyxzkH2ema2wKlEafMJGYp0DrVJ0z2jZxAb+zPIWtkE55ClchDd/LYX4FjoYwHQUZ8xThJMiUpxgrnDPal6Y8TIOglGYig+2YtYJdlrWM5t2Ypwgp7ViX01A4GnC3Kxml5VO1gZcgSNmFIMiYrsFd1uHSCEcDCMLaDATJRm2wTcEViZ90mP7MRN60Dd77tmGrdegj3rEN3kc5zE/mKTZJ7KuuLIMNUJYTDX9iYv8jGuqt3qkO7VtB302DmjtM9BRqMYr07TwCmSf2lRs3rBL7mxkIFwysEvvCLfq5JPYpjur9xShSOfkvDvOR0AriNhbHMU9x67IxUsRxJUQFpXY1r8jjJJaVmSpw2E0MhQr59jS4O7kcZg6CUJPEsRnTNSCCqSSIY7UBInUQxEoqXNAR4utaFYcK7ME8hS7kccCfYTjyoCa+KLojHg3HY2d4TOpA2JP4a4KceCLo7HmoMBRQAeVO9UYkKGJ8945DzIvhOD6oC8Bn5YGZBBEgacxNN4yCdIXwSRRwVx9KZKGnJt5DQ7BYpVWSKohmJUFKymi2bCtqSVzOV2zx3tIQbOcpKpQfaOj5/DllTNqZYHkUkHQuehRUi6aA6A/RoBdfWBQRX86PpU/qxfcQgTYsLpBOGzpctrIN/NbREC8EAWOdLwSpryWNFhdEj9CwwacINHidzjfDkdy1dPxDyb8lT3EB0KAGkxW4PuHryAyuk/2xLxJs9c08hmz4Gth304CvDMKAf/ny311YXAH/LqPILfDd2oBfWxBrm9nEcUysEvvu+cfwVd9Ml/nKu6x92gK/4e0a4gf1iBa1I9JXuCqKJCOVwTwu/pTT0tqfTIPySxjPdG8ZZi86YpZfPhB2g8jCRVnIwhTGpYl4CV7k/4zxp6zlj6aB8ABfPJUYAXRk/T1evLh+YTpIceJQv7JT/pJT8ttoUKTS844KRfX5yyiiyIaNyaWCjlFp68sFjVqEEzzIHA3kigZ8DcO7QQMGBxMNE2zyqrkIUuMN4pkgCdbqL4LU2J/8y7GuHgytymSa2mpwHBu7xEFlMwv2VtVUoce4zZdTZqEK4hs0mPtpKN6hIQ4uz5H4zlLYT4JUVvayGgVNK/u+km6mCkn5IA2G57nOmMnzMMdlUxA25jkzLYwLjUuJheDXOhqAc9PIkx+VsBvAJpfimTQICZKVAYUNRvVEa3DCAe3gwaFLM4KkujUMJMVom9TQhNywDETnZmriPTTAeAUfKZMG2scsDewAHaG3q/FtoI2r8YjB92gVtTTgGzBehBW08b9Gw3udwjc2G4qTfblNj2p8kTH3zFkm92If7aGDHJilgfmYMsXHF5+iwSQHJGBGQ7ikocB1rf6FBl+HW9DwnjY4GkJk4EwDppD8YklDOKchxtWoZhsaYJs0VzTkfwYN+RUNTTISsDENhxs0mD+HhlWnsDRsoA14wcI2wG5sOwX9hW3Al1KtbYieSwNOGdAIX0T9hW2wBqyP8b+aW9kG8zANrTGmKIyRpaOB4uuTBgvcFywIYw+hIGDOUxxx6T/Cvld7Lw38QRMZ8864R8uj8xQsGAUxxnkKlBQPZUcdDaV0bYFGPUiDxDU8En54cabBvt0Lv53TBsPHCmakYRASjqEgu58GcpOGdx0m79yDpRhGGswoCHc08E44QfmZhmKsIFr5IA1WfaxtGDtFeMs2XHkKm03S8m4aUg9ooOtsxse2gc0d5tpT2BSLtQ3h1CmcbXi8U3yLw4zLQBTqla1mZ/5kh/kMGhIqgIa3ZBUzfTx8+piGjTyFpaH61bhB4SPVkgZ6oeHeTpHkHGmoVjS8axsuNNAlDaNMjgbWr8YN1SdoAD92y2G6wfTMYUp0mN5FGx51mGcaVnbzTod51gY0E54kC4dJbztM+djMtN+29kurhrbtOOYLG36E3eFUwjaooEJZQIWX7NS2GaYLSMpeYff4ht9sVfR30uBnBdBwNCtf8R4NfTGgZMesbV9ZiplbAbun7AUeXJTQ4CrA79s6DbA98gbzqrzDb9tCyVr3/7/crQ1Bc8HhYEgjDrOSwCft5TT8lKSX+PcMk9zpKRIFniKsViK8Q0Ni5g+WPSmb+YNb4i9EFw0xzUL0h7ShW4CT/jg/fvNINj/OSpK+Zt2l7BQ/NopcJVneMZHx6fLULntNSbmUhHhv84JjT/iyLVMT76FhmXVTiiwzaYp4ywpkWeGLo8h3TeTqOWpx7BG1FJ2oZYWHOsUGeFZMsQV+DA12MPpfoKGrJhhHQ1BVyZHIRa1f0QB10/xoaeCXG20k2nfScMT1BhY6CNo2GGSpdfS2+kR/RUOnc00dDcGUFtdbLZ75LZ0i7Y6n0/GlG6qHOkUf/Jv9W/5TtsnWon17KhdzkL44G2kYXHZKrur9Kl2T5ufLpDcmM38qDRb+9PW1MOrtSCiWyLIgWBVxDZ6in6Lv0I0q1E+lQQ3mGnwF+3LWGjeuO274XbLfS4PXbfN9yHaRw2k70e66T7nJtxirIE4qk1RbIemSJC7sW79fl+0Oj3Oim3znP/1HUrrRt2M7daA0e9lGNkZPHyvDHQpzD/4X3rWs5QHUwbCRbHc0cjMaonRjVOK4kWzfR0P7vy7bGsd/14OOz+K7aPC2Wgm4RLfRfb6LBnUqtnidZIXibRPhvlEbxCa3WSP7uMpd+DZteE6n+D4ajjTcAGyb26xAX7a5K/3Y5cTJNqg2us8CWwn3/v/ntCE2fvVwx44dO3bs2LFjx44dO3bs2LFjx44dO3bs2LHjv4r/B1cEKfU9LnmSAAAAAElFTkSuQmCC" />

      <q-card-section>
        

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            {{name}}
            <br>
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
           
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          {{type}}
        </div>
        <div class="text-caption text-grey">
          Small plates, salads & sandwiches in an intimate setting.
        </div>
      </q-card-section>
      <q-separator/>
      <q-card-actions>
          <div style="display: flex; ">
          <div style="margin: 1em">
              <p style="text-align:center ">5</p>
              <p>Students</p>
          </div>
          <div style="margin: 1em">
              <p style="text-align:center">5</p>
              <p>Suspended</p>
          </div>
          <div style="margin: 1em">
              <p style="text-align:center">5</p>
              <p>Expelled</p>
          </div>
          </div>
      </q-card-actions>
    </q-card>
  </div></div>
</template>

<script>
import firebase from '../boot/config'
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters({isLoggedIn:'auth/isLoggedIn', currentUser:'auth/currentUser'})
    },
    data(){
        return{
            data: [
                {
                    name: '1'
                },
                {
                    name: '2'
                },
                {
                    name: '3'
                }
            ],
            stars: 2,
            name: '',
            type: '',
            id: ''
        }
    },
    created(){
        firebase.database.collection('schools').where('email', '==', this.currentUser.email).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                    this.id = doc.id;
                    this.name = doc.data().name;
                    this.type =  doc.data().type;
        })
            }).catch(err => {
                console.log(err)
            })
    }
}
</script>

<style>

</style>