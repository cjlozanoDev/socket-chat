class Usuarios {
  
  constructor() {
    this.personas = []
  }

  agregarPersona(id, nombre, sala) {
    const persona = { id, nombre, sala }
    this.personas.push(persona)
    
    return this.personas
  }

  getPersona(id) {
    const persona = this.personas.find(persona => persona.id === id)

    return persona
  }

  getPersonas() {
    return this.personas
  }

  getPersonasPorSala(sala) {
    const personasEnSala = this.personas.filter(persona => persona.sala === sala)
    return personasEnSala
  }

  borrarPersona(id) {
    const personaBorrada = this.getPersona(id)

    const personaIndex = this.personas.findIndex(persona => persona.id === id)
    // console.log('la persona a borrar es: ', personaIndex)
    this.personas.splice(personaIndex, 1)

    return personaBorrada
  }

}

module.exports = {
  Usuarios  
}