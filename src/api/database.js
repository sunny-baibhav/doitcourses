import { prisma } from "../lib/prisma.js"

// Example API functions for User operations
export const userApi = {
  // Get all users
  async getAllUsers() {
    try {
      const users = await prisma.user.findMany({
        include: {
          posts: true,
          courses: true,
          enrollments: {
            include: {
              course: true
            }
          }
        }
      })
      return users
    } catch (error) {
      console.error("Error fetching users:", error)
      throw error
    }
  },

  // Get user by ID
  async getUserById(id) {
    try {
      const user = await prisma.user.findUnique({
        where: { id },
        include: {
          posts: true,
          courses: true,
          enrollments: {
            include: {
              course: true
            }
          }
        }
      })
      return user
    } catch (error) {
      console.error("Error fetching user:", error)
      throw error
    }
  },

  // Create new user
  async createUser(data) {
    try {
      const user = await prisma.user.create({
        data: {
          email: data.email,
          name: data.name
        }
      })
      return user
    } catch (error) {
      console.error("Error creating user:", error)
      throw error
    }
  },

  // Update user
  async updateUser(id, data) {
    try {
      const user = await prisma.user.update({
        where: { id },
        data: {
          email: data.email,
          name: data.name
        }
      })
      return user
    } catch (error) {
      console.error("Error updating user:", error)
      throw error
    }
  },

  // Delete user
  async deleteUser(id) {
    try {
      const user = await prisma.user.delete({
        where: { id }
      })
      return user
    } catch (error) {
      console.error("Error deleting user:", error)
      throw error
    }
  }
}

// Example API functions for Course operations
export const courseApi = {
  // Get all courses
  async getAllCourses() {
    try {
      const courses = await prisma.course.findMany({
        include: {
          author: true,
          lessons: true,
          enrollments: {
            include: {
              user: true
            }
          }
        }
      })
      return courses
    } catch (error) {
      console.error("Error fetching courses:", error)
      throw error
    }
  },

  // Get course by ID
  async getCourseById(id) {
    try {
      const course = await prisma.course.findUnique({
        where: { id },
        include: {
          author: true,
          lessons: true,
          enrollments: {
            include: {
              user: true
            }
          }
        }
      })
      return course
    } catch (error) {
      console.error("Error fetching course:", error)
      throw error
    }
  },

  // Create new course
  async createCourse(data) {
    try {
      const course = await prisma.course.create({
        data: {
          title: data.title,
          description: data.description,
          price: data.price,
          isPublished: data.isPublished || false,
          authorId: data.authorId
        }
      })
      return course
    } catch (error) {
      console.error("Error creating course:", error)
      throw error
    }
  },

  // Enroll user in course
  async enrollUser(userId, courseId) {
    try {
      const enrollment = await prisma.enrollment.create({
        data: {
          userId,
          courseId
        },
        include: {
          user: true,
          course: true
        }
      })
      return enrollment
    } catch (error) {
      console.error("Error enrolling user:", error)
      throw error
    }
  }
}
