package routes

import (
	"renattoadorno/toolbox/go-api-example/app/handler"
	"github.com/gofiber/fiber/v2"
)

func Api(api fiber.Router) {

	api.Get("/hello", handler.Hello)

}